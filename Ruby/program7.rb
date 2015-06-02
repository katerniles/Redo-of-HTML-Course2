#loops: while, times, and each

number = 77
while (number <= 100) do # while this condition is true, do...
  p "the number is now #{number}" # whatever is in this code block
  number += 1 # short for number = number + 1
end # don’t forget your end

(0...35).each do |n| #while the number is 0 thru 34, do ...
	p "the new number is #{n}" #text to appear
end

47.times do
	puts "Kilroy was here"
end