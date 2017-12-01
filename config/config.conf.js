const config = {
    HOST: 'http://www.qiyisenlin.com',
    Name: 'a',
    Phone: 'b'
}

class InitSDK
{   
    constructor(name, phone) {
        config.Name = name;
        config.Phone = phone;
    }
}

export { InitSDK, config };