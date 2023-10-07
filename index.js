function introduction(name) {
    name = `Hi, my name is ${name}.`
    return name
}

// console.log(introduction('Jotun'))

function introductionWithLanguage(name, language) {
    name = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return name
}

// console.log(introductionWithLanguage('Slun', 'React'))

function introductionWithLanguageOptional(name, language) {
    if (language === undefined) {
    language = 'JavaScript'
    }   
        name = `Hi, my name is ${name} and I am learning to program in ${language}.`
        return name
}

// console.log(introductionWithLanguageOptional('Slim'))
// console.log(introductionWithLanguageOptional('Slim', 'Python'))






