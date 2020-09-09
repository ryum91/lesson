## 1. 함수에 매개변수 하나를 받아, 해당 매개변수의 타입을 반환하는 함수를 작성

```javascript
function foo(arg) {
  return typeof arg;
}
```

</br>

## 2. 래퍼 객체 Wrapper Object

- 기본형 타입은 본래 객체가 아니어서 method도 가지지 않는 데이터다.

- 이런 기본형 타입도 method를 호출할 수 있는데, 래퍼객체는 값에 불과한 기본형 타입을 포장해주어 객체에서 제공하는 다양한 property와 method를 활용할 수 있게 된다.

- 기본형 타입을 처리할 때는 임시적으로 래퍼 객체로 처리하고, 처리가 끝나면 곧바로 메모리에서 삭제된다.

### 래퍼 객체의 종류

- 래퍼객체에는 null과 undefined를 제외한 **String, Number, Boolean, Symbol, BigInt**가 있다.
