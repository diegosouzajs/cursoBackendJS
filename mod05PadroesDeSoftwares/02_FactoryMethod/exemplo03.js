// ============ PARTE 1: HIERARQUIA DE USUÁRIOS ============

// Classe base User - representa um usuário genérico no sistema
// Esta é uma classe concreta que pode ser instanciada diretamente
class User {
    constructor(name, password) {
        // Atributos básicos comuns a todos os usuários
        this.name = name;       
        this.password = password; 
        // Nota: A propriedade 'role' será definida nas subclasses
    }
}

// Classe Admin - representa um usuário administrador do sistema
// Herda de User e adiciona funcionalidades específicas de administrador
class Admin extends User {
    constructor(name, password, key) {
        // Chama o construtor da classe pai (User) para definir name e password
        super(name, password);
        this.role = "Administrador";  
        this.key = key;               
    }
}

// Classe Customer - representa um cliente/comprardor no sistema
class Customer extends User {
    constructor(name, password, address) {
        super(name, password);
        this.role = "Cliente";       
        this.address = address;      
    }
}

// Classe Seller - representa um vendedor no sistema
class Seller extends User {
    constructor(name, password, shopAddress, contact_No) {
        super(name, password);
        this.role = "Vendedor(a)";    
        this.shopAddress = shopAddress; 
        this.contact_No = contact_No;   
    }
}

// Classe Visitant - representa um visitante/convidado no sistema
class Visitant extends User {
    constructor(name, password, email, contact_No) {
        super(name, password);
        this.role = 'Visitante';      
        this.email = email;           
        this.contact_No = contact_No; 
    }
}

// ============ PARTE 2: IMPLEMENTAÇÃO DO FACTORY METHOD ============

// UserCreator - Classe abstrata que define a interface do Factory Method
// Esta é a parte "Criador Abstrato" do padrão Factory Method
class UserCreator {
    // Método factory que deve ser implementado pelas subclasses
    // Recebe um objeto com todas as informações necessárias para criar um usuário
    createUser(userInfo) {
        // Lança erro para forçar a implementação nas classes filhas
        throw new Error("Factory Method deve ser implementada");
    }
}

// AdminFactory - Fábrica concreta para criar objetos Admin
// Implementa o Factory Method específico para Administradores
class AdminFactory extends UserCreator {
    createUser(userInfo) {
        // Extrai os dados necessários do objeto userInfo e cria um Admin
        return new Admin(
            userInfo.name,      
            userInfo.password,  
            userInfo.key        
        );
    }
}

// CustomerFactory - Fábrica concreta para criar objetos Customer
class CustomerFactory extends UserCreator {
    createUser(userInfo) {
        return new Customer(
            userInfo.name,      
            userInfo.password,  
            userInfo.address    
        );
    }
}

// SellerFactory - Fábrica concreta para criar objetos Seller
class SellerFactory extends UserCreator {
    createUser(userInfo) {
        return new Seller(
            userInfo.name,          
            userInfo.password,      
            userInfo.shopAddress,   
            userInfo.contact_No     
        );
    }
}

// VisitantFactory - Fábrica concreta para criar objetos Visitant
class VisitantFactory extends UserCreator {
    createUser(userInfo) {
        return new Visitant(
            userInfo.name,       
            userInfo.password,   
            userInfo.email,      
            userInfo.contact_No  
        );
    }
}

// ============ PARTE 3: USO DO SISTEMA ============

// Criação das instâncias das fábricas
// Cada fábrica é especializada em criar um tipo específico de usuário
const adminFactory = new AdminFactory();        // Fábrica de administradores
const customerFactory = new CustomerFactory();  // Fábrica de clientes
const sellerFactory = new SellerFactory();      // Fábrica de vendedores
const visitantFactory = new VisitantFactory();  // Fábrica de visitantes

// Criação de usuários usando as fábricas
// NOTA IMPORTANTE: Cada createUser recebe APENAS UM objeto como parâmetro

// Cria um administrador com dados específicos
const adminUser = adminFactory.createUser({
    name: "Admin",                     
    password: "chimichuri",            
    key: "#1244534-fadsv34"            
});

// Cria outro administrador (demonstra reuso da mesma fábrica)
const adminUser2 = adminFactory.createUser({
    name: 'Diego',                     
    password: 'IFMG123',               
    key: '#1244534-ifmg34'             
});

// Cria um cliente com seus dados específicos
const customerUser = customerFactory.createUser({
    name: 'Joao José',                  
    password: 'Password123',            
    address: 'Rua 3, nª 90'             
});

// Cria um vendedor com dados comerciais
const sellerUser = sellerFactory.createUser({
    name: 'José Osvaldo',               
    password: 'senhasenha',             
    shopAddress: 'Rua 85, nº36, loja 5',
    contact_No: '(12)3456-7890'         
});

// Cria um visitante/convidado
const visitantUser = visitantFactory.createUser({
    name: 'Gumercindo',                 
    password: '123456',                 
    email: 'gumercindo@email.com',      
    contact_No: '123-456-7890'          
});

// ============ PARTE 4: EXIBIÇÃO DOS RESULTADOS ============

// Mostra no console os objetos criados
// Cada objeto terá sua estrutura específica baseada na sua classe
console.log('Administrador 1:', adminUser);
console.log('Administrador 2:', adminUser2);
console.log('Cliente:', customerUser);
console.log('Vendedor:', sellerUser);
console.log('Visitante:', visitantUser);

/*
RESUMO DAS VANTAGENS DESTA IMPLEMENTAÇÃO:

1. BAIXO ACOPLAMENTO: O código cliente não precisa saber como criar cada tipo de usuário
2. EXTENSIBILIDADE: Para adicionar novo tipo de usuário (ex: Moderador):
   - Criar classe Moderador extends User
   - Criar ModeradorFactory extends UserCreator
   - Pronto! Sem modificar código existente
3. MANUTENÇÃO: Lógica de criação centralizada nas factories
4. CONTRATO CLARO: UserCreator define interface obrigatória
5. SEPARAÇÃO DE CONCEITOS: Criação separada da lógica de negócio

EXEMPLO DE EXTENSÃO (adicionando Moderador):

class Moderador extends User {
    constructor(name, password, nivelAcesso) {
        super(name, password);
        this.role = "Moderador";
        this.nivelAcesso = nivelAcesso;
    }
}

class ModeradorFactory extends UserCreator {
    createUser(userInfo) {
        return new Moderador(
            userInfo.name,
            userInfo.password,
            userInfo.nivelAcesso
        );
    }
}

// Uso:
const moderadorFactory = new ModeradorFactory();
const moderador = moderadorFactory.createUser({...});
*/

const u1 = new User('Diego','Rodrigues');
console.log(u1);