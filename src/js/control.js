const { Router } = require("express");
const { v4: uuid } = require("uuid");
const connection = require("./database");

const router = Router();

const decodeId = (bufferArray) => {
    return Buffer.from(bufferArray).toString("hex");
};

const getDate = (text) => {
    const date = JSON.stringify(text).split("T")[0];
    const res = date.slice(1);
    console.log(res);
    return res;
}

const SUCCESS = {
    REQUEST_CREATED: (name) => `Request ${name} has been created`,
    REQUEST_UPDATED: (name) => `Request ${name} has been updated`,
    REQUEST_DELETED: 'Request has been deleted',
}

const ERRORS = {
    SERVER_ERROR: "Error on server",
    ALL_FIELDS_REQUIRED: "Some required fields are missing",
    NOT_FOUND: "Request was not found. Incorrect id",
};

router.get('/requests', (req, res) => {
    connection.query('select * from request',
        (err, requests) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: ERRORS.SERVER_ERROR,
                });
                return;
            }

            // const convertedData = requests.map(({
            //     id,
            //     title,
            //     description,
            //     date,
            //     filter_id,
            // }) => ({
            //     id: decodeId(id),
            //     title,
            //     description,
            //     date,
            //     filter_id: decodeId(filter_id),
            // }));

            res.status(200).json({
                data: requests,
            });
        });
});

router.get('/request/:id', (req, res) => {
    const { id } = req.params;
    connection.query(`select * from request where id = "${id}"`,
        (err, [request]) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: ERRORS.SERVER_ERROR,
                });
                return;
            }

            if (!request) {
                res.status(404).json({
                    message: ERRORS.NOT_FOUND,
                });
                return;
            }

            res.status(200).json({
                data: {
                    ...request,
                    // id: request.id,
                    // filter_id: request.filter_id,
                },
            });
        });
});

router.post('/request', (req, res) => {
    const { title, description, date, filter_id } = req.body;

    if (!(title && description && date && filter_id)) {
        res.status(400).json({
            message: ERRORS.ALL_FIELDS_REQUIRED,
        });
        return;
    }

    //const id = uuid().replaceAll('-', '');

    connection.query(
        `insert into request(title, description, date, filter_id) 
    values (
        "${title}",
        "${description}",
        "${date}",
        "${filter_id}"
      )`,
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: ERRORS.SERVER_ERROR,
                });
                return;
            }

            res.status(201).json({
                message: SUCCESS.REQUEST_CREATED(title),
            });
        }
    );
});

router.put('/request/:id', (req, res) => {
    const { id } = req.params;

    connection.query(`select * from request where id = "${id}"`,
        (err, [request]) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: ERRORS.SERVER_ERROR,
                });
                return;
            }

            if (!request) {
                res.status(404).json({
                    message: ERRORS.NOT_FOUND,
                });
                return;
            }

            const {
                title,
                description,
                date,
                filter_id,
            } = {

                ...request,
                date: getDate(request.date),
                // filter_id: request.filter_id,
                ...req.body,

            };

            connection.query(
                `update request set 
        title = "${title}", 
        description = "${description}",
        date = "${date}", 
        filter_id = "${filter_id}"
        where id = "${id}"`,
                (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            message: ERRORS.SERVER_ERROR,
                        });
                        return;
                    }

                    res.status(200).json({
                        message: SUCCESS.REQUEST_UPDATED(title),
                    });
                }
            );
        });
});

router.delete('/request/:id', (req, res) => {
    const { id } = req.params;
    connection.query(`delete from request where id = "${id}"`,
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: ERRORS.SERVER_ERROR,
                });
                return;
            }

            res.status(200).json({
                message: SUCCESS.REQUEST_DELETED
            });
        });
});

module.exports = router;