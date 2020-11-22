/*
 * Here is a different way to get all the haikus from the data array, instead of the hard to read line:
 * data.feed.entry[haiku_iterator-1].gs$cell.inputValue + "\n"+ data.feed.entry[haiku_iterator].gs$cell.inputValue; // Make cell.
 *
 * That being said.. this way will be hard to read until you learn what each
 * piece means, so... just a suggestion lol.

/******************************************************************************/
// Description: Parse out the haiku text from the data.feed.entry array using
// some cool javascript methods

// I use some syntax as follows:
// let x = startingvalue
//            .transform1
//            .transform2
//            .transform3
// you can think of it like a conveyor belt. Each transformation station on the
// converyor belt makes everything look 1 step closer to the desired outcome.

let haiku_text = data.feed.entry

  .slice(haiku_iterator-2, haiku_iterator+1)
    /* The "slice" function takes two indexes into an array, and slices out
     * elements in between. I use this to select the 3 relevant cells for this
     * haiku. I had to add 1 to the ending index because .slice does not take
     * the cell at the last index
     */
    // For examples that'll explain this better, check out this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

  .map(element => element.gs$cell.inputValue)
    /* The "map" function takes a function as an argument, and applies it to
     * everything. So [1, 2, 3].map(func) will become [func(1), func(2),
     * func(3)]. It is "map" in the mathematical sense, not as in cartography
     * lol. I made that mistake for many weeks before realizing.
     */
    /*
     * This may sound weird, but what I have in the parenthesis actually defines
     * a function. I could have written it like this as well:

        function dereference_element_into_inputValue(element) {
          return element.gs$cell.inputValue
        }

      * and then had it be like .map(dereference_element_into_inputValue)
      * isntead of .map(argument => one_line_long_function_body_that_returns)

      * But this shorter syntax is actually less confusing to me, and other
      * people that are familiar with it. Maybe it is just a style thing, in
      * which case I encourage you to delete this and rewrite it in the style
      * you like better!
      */
      // Here's a link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    /*
     * Ok. So the result so far is that we've selected the relevant array
     * elements using .slice, then gotten the data inside those objects out and
     * placed it into an array using .map. Try printing the result of the
     * statement so far:

     let haiku_array = data.feed.entry
       .slice(haiku_iterator-2, haiku_iterator+1)
       .map(element => element.gs$cell.inputValue)
       console.log(haiku_array)

     * Pretty neat, right?
     */
  .join('\n');
    /* .join is the simplest method of the 3 I used. I won't give an
     * explanation, but just a link.
     */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


/*
 * Ok, so that was 75 lines of explanation for 3 lines of code. Feel free to
 * ignore this haha but if you like this style of programming then you'll find
 * yourself thinking differently about programming and how you use it to
 * manipulate information
 */
