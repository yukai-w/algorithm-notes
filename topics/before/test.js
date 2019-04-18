const str =
  "two_sum,reverse_integer,palindrome_number,roman_to_integer,longest_common_prefix,valid_parentheses,merge_two_sorted_lists,remove_duplicates_from_sorted_array,remove_element,implement_strstr,search_insert_position,count_and_say,length_of_last_word,spiral_matrix_ii,valid_number,plus_one,add_binary,sqrtx,climbing_stairs,remove_duplicates_from_sorted_list,merge_sorted_array,same_tree,symmetric_tree,maximum_depth_of_binary_tree,convert_sorted_array_to_binary_search_tree,balanced_binary_tree,minimum_depth_of_binary_tree,path_sum,flatten_binary_tree_to_linked_list,pascals_triangle,pascals_triangle_ii,valid_palindrome,longest_consecutive_sequence,single_number,linked_list_cycle,min_stack";
const list = str.split(",");

const fs = require("fs");

list.forEach(item => {
  fs.writeFile(`${item}.js`, "", "utf8", function(error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log("写入成功");
  });
});
