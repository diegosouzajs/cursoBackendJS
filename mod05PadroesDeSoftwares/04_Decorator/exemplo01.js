// Classe base (Component)
// Representa a interface comum que será utilizada tanto pelos objetos concretos
// quanto pelos decoradores. Em JavaScript, usamos uma classe base no lugar
// de uma interface formal.
class Profile {
    constructor(nome, email, imagemPerfil) {
        // Atributos básicos do perfil
        this.nome = nome;
        this.email = email;
        this.imagemPerfil = imagemPerfil;
    }

    // Método que define o comportamento padrão de exibição do perfil
    display() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Imagem de perfil: ${this.imagemPerfil}`);
    }
}

// Componente concreto (Concrete Component)
// Implementa o comportamento básico do Profile sem adicionar funcionalidades extras.
// Ele pode ser decorado posteriormente.
class BasicProfile extends Profile {
    constructor(nome, email, imagemPerfil) {
        // Chama o construtor da classe base
        super(nome, email, imagemPerfil);
    }
}

// Classe decoradora abstrata (Decorator)
// Também herda de Profile para manter compatibilidade com o componente base.
// Ela encapsula um objeto Profile e delega a ele as chamadas de método.
class ProfileDecorator extends Profile {
    constructor(profile) {
        // Inicializa os atributos a partir do objeto encapsulado
        super(profile.nome, profile.email, profile.imagemPerfil);

        // Referência ao objeto que está sendo decorado
        this.profile = profile;
    }

    // Delegação do comportamento para o objeto encapsulado
    display() {
        console.log()
        this.profile.display();
    }
}

// Decorador concreto (Concrete Decorator)
// Adiciona a funcionalidade de "bio" ao perfil sem modificar a classe original.
class BioDecorator extends ProfileDecorator {
    constructor(profile, bio) {
        // Chama o construtor do decorador base
        super(profile);
        this.bio = bio;
    }

    // Estende o comportamento do método display
    display() {
        // Executa primeiro o comportamento original
        super.display();

        // Acrescenta a nova funcionalidade
        console.log(`Bio: ${this.bio}`);
    }
}

// Outro decorador concreto
// Adiciona links de redes sociais ao perfil de forma dinâmica.
class SocialMediaDecorator extends ProfileDecorator {
    constructor(profile, socialMediaLinks) {
        super(profile);
        this.socialMediaLinks = socialMediaLinks;
    }

    display() {
        super.display();
        console.log(`Links para redes sociais: ${this.socialMediaLinks}`);
    }
}

// =====================
// Exemplo de uso
// =====================

// Criação do componente concreto (perfil básico)
let basicProfile = new BasicProfile(
    "Diego Rodrigues",
    "diego@example.com",
    "imagemPerfil.jpg"
);

// Exibe apenas os dados básicos
basicProfile.display();

// Criação de um perfil decorado com bio
let profileWithBio = new BioDecorator(
    basicProfile,
    "Eu sou analista de sistemas"
);

// Exibe os dados básicos + bio
profileWithBio.display();

// Criação de um perfil decorado com redes sociais
let profileWithSocialMedia = new SocialMediaDecorator(
    basicProfile,
    "@jdiegorodrigues"
);

// Exibe os dados básicos + links de redes sociais
profileWithSocialMedia.display();
