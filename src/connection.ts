import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb://localhost/typegraphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})