import { sequelize } from "../";
import { INTEGER, Model, STRING } from "sequelize-cockroachdb";

interface RoomInstance extends Model {
  code: string;
}

const Room = sequelize.define<RoomInstance>("rooms", {
  code: {
    type: STRING,
    primaryKey: true,
  }
});

export default Room;