function slicing(my_string, query) {
    const [start, end] = query;
    const reversed = my_string
        .slice(start, end + 1)
        .split('')
        .reverse()
        .join('');
    return my_string.slice(0, start) + reversed + my_string.slice(end + 1);
}

function solution(my_string, queries) {
    let result = my_string;
    for (const query of queries) {
        result = slicing(result, query);
    }
    return result;
}
