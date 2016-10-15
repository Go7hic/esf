## esh

#### API

#### combine(arrays) 合并数组
    combine(["foo"], ["bar", "baz"], [1, 2]) // => ["foo", "bar", "baz", 1, 2]

#### compact(array) 把数组里面元素值为false的删除
    compact([0, 1, false, 2, "", 3]) // => [1, 2, 3]

#### contains(array, value) 判断数组里面是否包含某元素
    contains([1, 2, 3], 3) // => true

#### difference(array, others) 返回两数组不相同的元素
    difference([1, 2, 3, 4, 5], [5, 2, 10]) // => [1, 3, 4]

#### head(array) 返回数组的第一个元素
    head(["foo", "bar"]) // => "foo"

#### initial(array) 返回除最后一个元素的所有元素
    initial([3, 2, 1]) // => [3, 2]

#### intersection(arrays) 求数组的交集
    intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) // => [1, 2]

#### last(array) 返回数组的最后一个元素
    last(["foo", "bar"]) // => "bar"

#### sortedIndex(array, value) 返回 value 值在数组 array 里的从小到大排序的索引值
    sortedIndex([10, 20, 30, 40, 50], 35) // => 3

#### tail(array) 返回数组除第一个以外的所有元素
    tail(["foo", "bar", "baz"]) // => ["bar", "baz"]

#### toArray(arrayLike) 把类数组对象返回一个真正的数组
    Array.isArray((() => toArray(arguments))("foo", "bar")) // => true

#### union(arrays) 以数组的形式返回多个数组的并集
    union([1, 2, 3], [101, 2, 1, 10], [2, 1]) // => [1, 2, 3, 101, 10]

#### unique(array) 数组去重
    unique([1, 2, 1, 3, 1, 4]) // => [1, 2, 3, 4]

#### without(array, values) 返回 array 里除 values 值以为的所有元素
    without([1, 2, 1, 0, 3, 1, 4], 0, 1) // => [2, 3, 4]

#### getValues(object)把object 对象的值以数组的形式返回
    getValues({ foo: "bar", hello: "world" }) // => ["bar", "world"]

#### merge(objects) 把多个 object 合并成一个新的 object
    merge({ foo: "bar" }, { hello: "world" }) // => { foo: "bar", hello: "world" }

#### toMap(object) 把 Object 转成 Map
    toMap({ name: "Ben", age: 31 }); // => Map { name: "Ben", age: 31 }

#### min(array) 返回数组里的最小的一个元素
    min([10, 50, 30]) // => 10

#### max(array) 返回数组里的最大的一个元素
    max([10, 50, 30]) // => 50

#### sum(array) 返回数组各项之和
    sum([1, 2, 3]) // => 6

#### product(array) 返回数组所以元素的乘积
    product([2, 5, 10]) // => 100

#### not(function) 
    const isNull = x => x == null;
    const isSet = not(isNull);
    isSet(undefined); // => false

#### maybe(function) 返回一个函数，只有在有参数都满足的情况下才能调用
    var greet = (message, name) => console.log(message + " " + name);
    var safeGreet = maybe(greet);
    greet("Hi"); // => "Hi undefined"
    safeGreet("Hi"); // => Doesn't execute

#### once(function) 返回的这个函数只能调用一次
    const greet = () => console.log("Hi");
    const greetOnce = once(greet);
    greetOnce(); // => "Hi"
    greetOnce(); // => Doesn't execute

#### curry(function) 使函数柯里化
    const add = curry((a, b) => a + b);
    add(2, 3); // => 5
    add(2)(3); // => 5
 
#### pipeline(functions) 把多个函数按从左到右的顺序组合
    var plus1 = a => a + 1;
    var mult2 = a => a * 2;
    var addThenMult = pipeline(plus1, mult2);
    addThenMult(5); // => 12