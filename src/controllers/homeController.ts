import { Request, Response } from "express";

const homeController = (req: Request, res: Response) => {
    res.json({
        name: "Hotel Miranda",
        endpoints: {
            private: {
                get: [
                    "/api/bookings",
                    "/api/contact",
                    "/api/rooms",
                    "/api/users"
                ]
            },
            public: {
                get: [
                    "/api"
                ],
                post: [
                    "/api/login"
                ]
            }
        }
    })
}

export default homeController;