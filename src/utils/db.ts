import mongoose, { Mongoose } from "mongoose";

const connect = async (): Promise<Mongoose> => {
    try {
        const connection = await mongoose.connect(process.env.MONGO ?? "");
        return connection;
    } catch (error) {
        throw new Error("Connection failed");
    }
};

export default connect;