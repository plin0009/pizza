import { sequelize } from "..";
import { INTEGER, Model, STRING } from "sequelize-cockroachdb";

interface SliceInstance extends Model {
  room_code: string;
  name: string;
}

const Slice = sequelize.define<SliceInstance>("slices", {
  room_code: {
    type: STRING,
    primaryKey: true,
  },
  name: {
    type: STRING,
    primaryKey: true,
  }
});

export default Slice;