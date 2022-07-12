# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd number
    if number.even? 
        puts "#{number} is even"
    elsif 
        puts "#{number} is odd"
      end
    end
    
puts even_odd (num1)
# My output: 7 is odd
puts even_odd (num2)
# My output: 42 is even
puts even_odd (num3)
# My output: 221 is odd



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'


def no_vowels (str) 
   
   str[/[aeiou](.)\1/] do
      return str_new
end

puts no_vowels (album1)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_tester (str) 
    if str = str.downcase.split.reverse
        return true
        #puts "#{str} is a palindrome"
    elsif
        return false
        #puts "#{str} is not a palindrome"
     end
   end

puts palindrome_tester (palindrome_tester1)

puts palindrome_tester (palindrome_tester2)

puts palindrome_tester (palindrome_tester3)

