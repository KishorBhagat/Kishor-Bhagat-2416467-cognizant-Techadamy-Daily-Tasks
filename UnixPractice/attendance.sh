students=("Kishor" "Alice" "Bob" "Charlie" "David")

attendance=()

date=$(date +"%Y-%m-%d")

mark_attendance() {
    if [[ "$1" == 'P' || "$1" == 'p' ]]; then
        echo "Present"
    elif [[ "$1" == 'A' || "$1" == 'a' ]]; then
        echo "Absent"
    else
        echo "Invalid"
    fi
}

echo "Enter P for present and A for absent:"
echo

for student in "${students[@]}"; do
    read -p "$student (P/A): " input
    status=$(mark_attendance "$input")
    attendance+=("$status")
done

echo -e "\nName\t\tDate: $date"
echo "-----------------------------"

for i in "${!students[@]}"; do
    printf "%-10s\t%s\n" "${students[$i]}" "${attendance[$i]}"
done