echo "enter numbers"
read -a numbers

for num in "${numbers[@]}"
do
	if ! [[ "$num" =~ ^[0-9]+$ ]]; then
		echo "$num is not a valid integer"
		continue
	fi

	if  ((num % 2 == 0)); then
		echo "$num is even"
	else
		echo "$num is odd "
	fi
done
