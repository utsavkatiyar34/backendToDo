const { error } = require("console");

class Works {
    constructor() {
        this.work = [
            {
                id: 1,
                name: "assignment",
                status: false
            },
            {   
                id:"2",
                name: "cooking",
                status: false 
            }
        ]
    }

    getWorks() {
        return this.work;
    }

    addWorks(data) {
        let u = 3;

        this.work.forEach((el) => {
            u = Math.max(u, el.id)
        })

        data.id = u + 1;
        data.status= false;

        this.work.push(data);
        return "Work added successfully";
    }

    deleteWorks(id) {
        let m = null
        this.work.forEach((el, i) => {
            if (el.id == id) {
                m = i;
            }
        })

        if (m == null) {
            throw error
        } else {
            this.work.splice(m, 1);
            return "Work deleted successfully!"
        }
    }

    putWorks(data) {
        let flags = false;
        this.work.forEach((el, i) => {
            if (data.id == el.id) {
                this.work[i] = data
                flags = true;
            }
        })

        if (flag) {
            return "Work updated successfully!"
        } else {
            this.work.push(data);
            return "Work updated!"
        }


    }
}

module.exports = Works