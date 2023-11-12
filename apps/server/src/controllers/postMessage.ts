import { Request, Response } from "express";
import { Queue } from '../services';

const func = async (req: Request, res: Response) => {
    const queue = Queue.Instance;

    const { queue_name } = req.params;
    const { message } = req.body;

    queue.addMessage(queue_name, message);

    res.json({ message: "ok" });
};

export default func;
