import productdata from "./constant/productsdata";
import { deleteMany, insertMany } from "./models/productsSchema";

const DefaultData = async()=>{
    try {
        await deleteMany({});
        const storeData = await insertMany(productdata);
        console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

export default DefaultData;