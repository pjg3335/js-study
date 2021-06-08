/* 
  * object, Object, {} *

  object : 원시형(string, number, bigint, boolean, symbol, null, undefined)를 제외한 모든 값을 받을 수 있음
  Object : 모든 생성자가 extends하는 객체
  {} : Object와 동일 (빈타입의 객체 아니다)
*/

function fn_object(param: object) {}
fn_object([ 1, 2 ])
fn_object({ a: 1 })
// fn_object(1) // error: 원시형 못 받음
// fn_object(true) // error: 원시형 못 받음

function fn_Object(param: Object) {}
fn_Object([ 1, 2 ])
fn_Object({ a: 1 })
fn_Object(1)
fn_Object(true)
// fn_Object(null) // error: Object의 하위가 아니라 못 받음
// fn_Object(undefined) // error: Object의 하위가 아니라 못 받음

function fn_Object2(param: {}) {}
fn_Object2([ 1, 2 ])
fn_Object2({ a: 1 })
fn_Object2(1)
fn_Object2(true)
// fn_Object2(null) // error: Object의 하위가 아니라 못 받음
// fn_Object2(undefined) // error: Object의 하위가 아니라 못 받음