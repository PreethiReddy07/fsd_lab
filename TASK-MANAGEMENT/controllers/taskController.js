const Task = require("../models/Task")

exports.createTask = async (req, res) => {
    try {
        const u = await Task.create({ ...req.body, assignedTo: req.user._id });
        res.status(200).json(u)
    } catch (err) {
        res.status(200).json({ msg: "err" })
    }
}
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ assignedTo: req.user._id })
        res.json({ tasks })
    } catch (err) {
        res.status(200).json({ msg: "err" })
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const tasks = await Task.findOne({ _id: req.params.id, assignedTo: req.user._id })
        if (!tasks)
            return res.status(404).json({ msg: 'Task not found' });
        res.json({ tasks })
    } catch (err) {
        res.status(200).json({ msg: "err" })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const x = await Task.updateOne({ _id: req.params.id, assignedTo: req.user._id }, req.body, { new: true })
        if (!x)
            return res.status(404).json({ msg: 'Task not found' });
        res.json({ x })
    } catch (err) {
        res.status(200).json({ msg: "err" })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.user._id });
        if (!task)
            return res.status(404).json({ msg: 'Task not found or not authorized' });
        res.json({ msg: 'Task deleted' });
    } catch (err) {
        res.status(200).json({ msg: "err" })
    }
};
