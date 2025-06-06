echo "Enter a no:"
read num

remainder=$((num % 2))

case $remainder in
	0) echo "$num is even "
	;;
	1) echo "$num is odd"
	;;
	*) echo "Invalid num"
esac
