//Função responsável por inserir as mensagens de erro nos input's quando chamada na validação do usuário.
function error_message(master, text){
    const span = document.createElement("span");
    span.classList.add("error-message");
    span.textContent = text;
    master.appendChild(span);
    master.classList.add('span-space');

}

//Função de validação do campo e-mail/telefone/usuário.
function user_validation(email) {
    const user = document.getElementById("user");
    const existingSpan = user.querySelector(".error-message");
    const valueInput = email.value;

    // Se o valor do campo de entrada não for válido
    if (!valueInput.includes("@") || !valueInput.includes(".")) {
    // Verifica se já existe uma mensagem de erro
    if (!existingSpan) {
        error_message(user, "Informe um email ou número de telefone válido.")
        return false
        }
    } else {
        // Se o campo estiver correto, remove qualquer mensagem de erro anterior
        if (existingSpan) {
            existingSpan.remove();
            user.classList.remove('span-space');
        }
        return true
    }
}

//Função de validação do campo de senha.
function password_validation(pass) {
    const password = document.getElementById("password");
    const existingSpan = password.querySelector(".error-message");
    const valueInput = pass.value;

    // Se o valor do campo de entrada não for válido
    if (valueInput.length < 4 || valueInput.length > 60) {
        // Verifica se já existe uma mensagem de erro
        if (!existingSpan) {
            error_message(password, "A senha deve ter entre 4 e 60 caracteres.")
            return false
        }
    } else {
        // Se o campo estiver correto, remove qualquer mensagem de erro anterior
        if (existingSpan) {
            existingSpan.remove();
            password.classList.remove('span-space');
        }
        return true
    }
}

//Função de validação e acesso ao catálogo de filmes.
function validation(){

    const userV = user_validation(document.querySelector('#user input'))
    const passwordV = password_validation(document.querySelector('#password input'))

    if (userV && passwordV){
        alert("Seu login está sendo autenticado")
    }

}

let passwordVisible = false;

function togglePasswordVisibility() {
    const passwordInput = document.querySelector('#password input');
    const showButton = document.querySelector('#show');

    // Alterne o estado da senha visível/oculta
    passwordVisible = !passwordVisible;

    // Atualize o tipo de entrada e o texto do botão com base no estado
    if (passwordVisible) {
        passwordInput.type = 'text';
        showButton.textContent = 'OCULTAR';
    } else {
        passwordInput.type = 'password';
        showButton.textContent = 'MOSTRAR';
    }

    // Coloque o foco de volta no campo de senha
    passwordInput.focus();
}
