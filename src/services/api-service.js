export default class AppService {

    async getResource(url) {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }

        return await res.json();
    }


    async deleteResource(url) {
        const res = await fetch(url, {
            method: 'DELETE'
        });

        if(!res.ok) {
            throw new Error(`Could not delete ${url}` + `, received ${res.status}`)
        }

        return await res.status;
    }

    getAllUsers() {
        return this.getResource(`http://everyday-battle.herokuapp.com/users`);
    }

    async getUserTasks(id) {
        const res = await this.getResource(`http://everyday-battle.herokuapp.com/users/${id}/tasks`)
        return res;
    }

    async getCard(id) {
        const res = await this.getResource(`http://everyday-battle.herokuapp.com/users/${id}`);
        return res;
    }

    async deleteTask(id) {
        const res = await this.deleteResource(`http://everyday-battle.herokuapp.com/tasks/${id}`);
        return res;
    }
}

