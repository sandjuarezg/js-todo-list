<<<<<<< HEAD
import Alert from './alert.js';
=======
>>>>>>> 94e9f09de003a0063c5d9515004e6c3ec938db94
export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
<<<<<<< HEAD
        this.alert = new Alert('alert');
=======
>>>>>>> 94e9f09de003a0063c5d9515004e6c3ec938db94
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if(title.value === '' || description.value === ''){
<<<<<<< HEAD
                this.alert.show('Titulo y descripcion deben existir');
            } else {
                this.alert.hide();
=======
                console.error('incorrecto');
                // alert.innerText = 'Titulo y descripcion deben existir';
            } else {
>>>>>>> 94e9f09de003a0063c5d9515004e6c3ec938db94
                callback(this.title.value, this.description.value);
            }
        }
    }
}