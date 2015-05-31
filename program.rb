def greeting #here we say def to define a method and put the name of our method
	puts "Please enter your name:" #here's the code inside our method
	name = gets.chomp
	puts "Hello" + " " + name
end
greeting
