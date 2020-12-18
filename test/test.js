import test from 'ava'
import * as esf from '../esf'

test('combin', (t) => {
  t.truthy(esf.combine([1, 2], [3, 4]), [1, 2, 3, 4])
})

test('compact', (t) => {
  t.truthy(esf.compact([0, 1, false, 2, '', 3]), [1, 2, 3])
})

test('contains', (t) => {
  t.truthy(esf.contains([1, 2, 3], 3))
})

test('difference', (t) => {
  t.truthy(esf.difference([1, 2, 3, 4, 5], [5, 2, 10]), [1, 3, 4])
})

test('head', (t) => {
  t.truthy(esf.head(['foo', 'bar']), 'foo')
})
test('initial', (t) => {
  t.truthy(esf.initial([1, 2, 3], [3]))
})

test('intersection', (t) => {
  t.truthy(esf.intersection([1, 2, 3], [3]))
})


