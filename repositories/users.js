const fs = require('fs');
const _ = require('lodash');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository{
    async create(attrs) {

        // object { email, salt, hashpassword}

        attrs.id =  await this.randomId();

        const salt = crypto.randomBytes(_.random(8, 15)).toString('hex');


        const hashedPassword = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();

        const record = {
            ...attrs,
            password: `${hashedPassword.toString('hex')}@$${salt}`,
        };
        records.push(record);

        await this.writeAll(records);
        return record;
    }

    async comparePasswords(saved, supplied){
        // save is the password on database with .salt
        // supplied password is only password from User
        const [hashed,salt] = saved.split('@$');
        const hashedSuppliedBuffer = await scrypt(supplied, salt, 64);

        // hashedSupplied is Buffer
        return hashed === hashedSuppliedBuffer.toString('hex');
       
    }

}


module.exports = new UsersRepository('users.json');