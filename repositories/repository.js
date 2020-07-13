const fs = require("fs");
const _ = require("lodash");
const crypto = require("crypto");

module.exports = class Repository {
  constructor(filename) {
    // need filename to run
    if (!filename) {
      throw new Error("Creating a repository required a filenames");
    }

    this.filename = filename;

    // constructor not allow async inside => use sync method

    /* ----------------------------- check if exist ----------------------------- */
    try {
      // access file if it is exist
      fs.accessSync(this.filename);
    } catch (err) {
      // create file if it doesn't exist
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async create(attrs) {
    attrs.id = await this.randomId();

    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);

    return attrs;
  }

  async getAll() {
    // Open the file called
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  async getByID(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();

    const fillteredRecords = records.filter((record) => record.id !== id);

    await this.writeAll(fillteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Record with id ${id} was not found`);
    }

    try {
      Object.assign(record, attrs);
      await this.writeAll(records);
    } catch (error) {
      console.log("error update", error);
      return false;
    }

    return true;
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
  async randomId() {
    try {
      const id = crypto.randomBytes(4).toString("hex");
      if (await this.getByID(id)) {
        id = crypto.randomBytes(4).toString("hex");
        await this.randomId();
      }
      return id;
    } catch (err) {
      console.log("cannot generate randomId err", err);
      return "NEED TO UPDATE";
    }
  }
};
