echo "Enter a no:"
read num

if [ $num -gt 0 ]; then
	echo "positive"
elif [ $num -lt 0 ]; then
	echo "negative"
else
	echo "Zero"
fi
