var fm = require('./fm.js')
var expect = require('expect.js')

describe('fm', function () {
  it('should observe events', function (done) {
    fm('test1', done)
    fm('test1')
  })

  it('should accept updated value', function (done) {
    fm('test2', function (arg1) {
      expect(arg1).to.be(2)
      done()
    })
    fm('test2', 2)
  })

  it('should be able to unobserve', function (done) {
    function ignore () {
      done('should not be called')
    }
    fm(ignore)
    fm(ignore)
    fm('test3', done)
    fm('test3')
  })

  it('should be able to toggle on / off', function (done) {
    fm('test4', done)
    fm('test4', done)
    fm('test4', done)
    fm('test4')
  })

  it('should be able to observe everything', function (done) {
    fm(function(){done()})
    fm('test5')
  })
})
