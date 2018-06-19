process.env.NODE_ENV = 'test';

let server = 'http://localhost:3000';
const request = require('supertest');
require('should');

describe('Managers', () => {
    describe('/POST manager', () => {
        it('it should create manager', (done) => {
            request(server)
                .post('/manager')
                .send({
                    manager_name: "Jonn",
                    manager_title: "CEO"
                })
                .expect(200)
                .end((err, res) => {
                    res.body.should.have.property('manager_id');
                    done();
                });
        });
    });
    describe('/GET manager', () => {
        it('it should GET list of related employees', (done) => {
            request(server)
                .get('/manager/1/employees')
                .expect(200)
                .end((err, res) => {
                    res.body.should.be.instanceof(Array);
                    done();
                });
        });
    });
});