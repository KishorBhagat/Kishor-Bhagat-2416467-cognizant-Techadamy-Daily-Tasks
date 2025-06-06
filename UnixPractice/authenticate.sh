declare -A users=(
    ["kishor8"]="Kishor:admin123:Admin"
    ["Eve2"]="Eve:admin456:Admin"
    ["bob1"]="Bob:guestpass:Guest"
    ["johnt2"]="John:guest789:Guest"
    ["charlie1"]="Charlie:charlie123:Member"
    ["sarah2"]="Sarah:sarahpass:Member"
    ["vinod5"]="Vinod:vinodpass:Membet"
)

validate_login() {
    local username="$1"
    local password="$2"

    local record="${users[$username]}"

    if [[ -n "$record" ]]; then
        IFS=':' read -r name correct_password role <<< "$record"

        if [[ "$password" == "$correct_password" ]]; then
            echo "$name:$role"
            return 0
        fi
    fi

    return 1
}

show_role_actions() {
    local name="$1"
    local role="$2"

    case "$role" in
        Admin)
            echo "Welcome, $name! You have Admin access."
            ;;
        Guest)
            echo "Welcome, $name! You have Guest access."
            ;;
        Member)
            echo "Welcome, $name! You have Member access."
            ;;
        *)
            echo "Welcome, $name! Unknown role."
            ;;
    esac
}

login() {
    local attempts=0
    local max_attempts=3

    while (( attempts < max_attempts )); do
        read -p "Username: " username
        read -p "Password: " password
        echo

        login_result=$(validate_login "$username" "$password")
        if [[ $? -eq 0 ]]; then
            IFS=':' read -r name role <<< "$login_result"
            echo "Login successful!"
            show_role_actions "$name" "$role"
            return
        else
            echo "Invalid username or password. Try again."
            ((attempts++))
        fi
    done

    echo "Too many failed attempts. Access denied."
}

login
