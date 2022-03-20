export default function talfyLoop (array, callback, scope=this) {
    return array.reduce((acc, currentValue) => acc + callback.apply(scope,[currentValue]), ''); 
}