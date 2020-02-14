import Swal from 'sweetalert2';
export default function dialog(str){
    switch (str) {
        case 'yes':
            Swal.fire(`great! let's get started. just open the door over there and E5000 will let you know what to do`)
            break;
        case 'no':
            Swal.fire(`Oh, that's too bad`)
            break;
        case 'on load':
            Swal.fire({
                position: 'top',
                title: 'I have a job for you, are you interested?',
                showConfirmButton: false,
                timer: 1500
            })
            break;
            case 'start':
                Swal.fire({
                    position:'top',
                    title:'Here we go, off to our interview!',
                    showConfirmButton: false,
                    timer:1500
                })

        default: Swal.fire(` what happened?`)
    }
}