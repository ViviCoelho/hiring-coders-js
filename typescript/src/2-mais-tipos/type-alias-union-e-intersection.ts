type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;
}

const viviane: User = {
    name: 'viviane',
    lastName: 'coêlho',
    birthday: '16/04/1986',
}

//union types
// como se fosse o or ||

type LogLevel = 'info' | 'error' | 'debug';

function logMessage (message: string, level: LogLevel){
    console.log(`[${level}] - ${message} `)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')

//intersection type
//agrupar

type About = {
    bio: string;
    interest: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'viviane',
    lastName: 'coêlho',
    birthday: '16/04/1986',
    bio: 'olá meu nome é viviane',
    interest: ['basquete', 'música', 'fotografia']
}

type ComposedProfile = User & {
    log: LogLevel;
}