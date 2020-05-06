// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    //debugger // to hit debugger, open index.html and call this function in console
    return Object.assign({}, driverObject, {[key]: value})
    //not destructively updating driver, just making a new object
    //need to add everything to empty object in order to not mutate driver
    //test is passing in driver variable as argument
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value){
    // works: return Object.assign(driverObject, {[key]: value})
    //simpler:
    driverObject[key] = value
    return driverObject
}

function deleteFromDriverByKey(driverObject, key){
    const newObj = Object.assign({}, driverObject)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driverObject, key){
    delete driverObject[key]
    return driverObject
}