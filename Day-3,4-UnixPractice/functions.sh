add_numbers() {
	num1=$1
	num2=$2
	sum=$((num1 + num2))
	echo "Sum = $sum"
}
echo "Enter two numbers:"
read n1
read n2

add_numbers n1 n2
