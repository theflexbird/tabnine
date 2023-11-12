import { Request, Response } from "express";
import { Queue } from "../services";

const func = async (req: Request, res: Response) => {
    const queue = Queue.Instance;

    const timeout = req.query.timeout ? parseInt(req.query.timeout as string) : 10000;

    const { queue_name } = req.params;

    const interval = 100;
    let elapsed = 0;
    let message = null;
    while (elapsed < timeout) {
        message = queue.getMessage(queue_name);
        if (message !== null && message !== undefined) {
            break;
        }
        queue.getMessage(queue_name)
        await new Promise((resolve) => setTimeout(resolve, interval));
        elapsed += interval;
    }

    if (message === null || message === undefined) {
        return res.status(204).end();
    }

    res.json({ message });
}

export default func;
