
#switch statement
def choose
  puts "Which door do you want to open? Answer 1, 2, or 3, please."
  choice = gets.chomp
  case choice.downcase
  when "1"
    puts "You/'ve chosen Door No. 1!"
  when "2"
    puts "You/'ve chosen Door No. 2!"
  when "3"
    puts "You/'ve chosen Door No. 3!"
  else
    puts "You have a choice of only 1, 2, or 3! Try again!"
   end
end
choose