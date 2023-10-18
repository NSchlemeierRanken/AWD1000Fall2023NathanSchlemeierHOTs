let age = prompt("Enter your age.")
if (isNaN(age))
{
    alert("Please enter your age!");
}

else if (age < 1 || age > 200)
{
    alert("Age out of range!");
}

if (age >=21)
{
    alert("Welcome to the venue!");
}

else if (age < 21)
{
    alert("You're not old enough");
}