import carModel from "../models/carModel.js";



export const createCar = async (req, res) => {
  try {
    const newCar = new carModel(req.body);
    await newCar.save();
    res.status(201).send("new car created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllCars = async (req, res) => {  
    try {
        const allCars = await carModel.find();
    res.status(202).json(allCars);
    } catch (error) {
         console.error(error);
    }
};

export const getCarById = async (req, res) => {
    try {
      const car = await carModel.findById(req.params.id);
      const {password, ...remainingCarData} = car._doc;
      res.status(200).json(remainingCarData);
    } catch (error) {
      console.error(error);
    }
  };

export const deleteCarById = async (req, res) => {
    try {
    const car = carModel.findByIdAndDelete(req.params.id); 
    console.log(car);
    res.status(200).send(`Car is deleted!`);
    } catch (error) {
        console.error(error);
    }
};

export const updateCar = async (req, res) => {
    try {
      const updatedCar = await carModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCar);
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteCarByYear = async (req, res) => {
    try {
      await carModel.deleteMany({ year: req.params.year });
      console.log(`Car year ${req.params.year} deleted`);
      res
        .status(200)
        .send(`Car with year ${req.params.year} deleted`);
    } catch (error) {
      console.error(error);
    }
  };