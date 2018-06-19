process.env.NODE_ENV = 'test';

let server = 'http://localhost:3000';
const request = require('supertest');
require('should');

describe('Employees', () => {
    describe('/POST employee', () => {
        it('it should create employee', (done) => {
            request(server)
                .post('/emp')
                .send({
                    emp_name: "Jonn"
                })
                .expect(200)
                .end((err, res) => {
                    res.body.should.have.property('emp_id');
                    done();
                });
        });
    });
    describe('/GET employee', () => {
        it('it should get first employee', (done) => {
            request(server)
                .get('/emp/1')
                .expect(200)
                .end((err, res) => {
                    res.body.should.have.property('emp_id');
                    done();
                });
        });
    });
});