#include <stdio.h>
#include <windows.h>
#include <conio.h>  // For _kbhit() function
#include <string.h> // For strcpy()

int work_time_minutes;
int rest_time_minutes;
int work_time_bar;
int rest_time_bar;
char work_wordings[100]; // Array to hold the string
char reply;

int work() {
    printf("Enter the duration you want to concentrate (in minutes): \n");
    scanf("%d%*c", &work_time_minutes);
    work_time_bar = work_time_minutes * 1200; 
    strcpy(work_wordings, "Look away! Concentrate!");  // Copy string to array
    return work_time_bar;
}

int rest() {
    printf("Enter the duration you want to rest (in minutes): \n");
    scanf("%d%*c", &rest_time_minutes);
    rest_time_bar = rest_time_minutes * 1200;  
    return rest_time_bar;
}

// Function to create loading bar
void loadingBar(int bar_value, char *wordings, char *endings) {

    char a = 177, b = 219; // Characters for loading bar

    printf("\n\n\n\n");
    printf("\t\t\t\t\t%s\n\n", wordings); // Print the wordings
    printf("\t\t\t\t\t");

    // Print initial loading bar
    for (int i = 0; i < 50; i++)
        printf("%c", a);

    // Reset the cursor to the start of loading bar
    printf("\r");
    printf("\t\t\t\t\t");

    // The loading bar moves
    for (int i = 0; i < 50; i++) {
        printf("%c", b);
        Sleep(bar_value); // Sleep for faster animation
    }
    printf("\n\n\t\t\t\t\t%s\n", endings);
}

// ALARM to play a sound between work and rest
void playSound(int freq) {
    while (!_kbhit()) {  // Continue while no key is pressed
        Beep(freq, 500);  // freq Hz for 500ms duration
        Sleep(500);  // 500ms delay before next beep
    }
}

void playEndSound(int freq) {
    for (int i = 0; i < 3; i++) { // Beep 3 times
        Beep(freq, 500); // Beep at freq Hz for 500ms duration
        Sleep(500);  }
}


int main() {
    char continue_program = 'y';  // Initialize the continue_program variable
    char reuse = 'n';

    while (continue_program == 'y') {
        // Loop to repeat the process
        system("cls");
        system("color 0F"); // input: white on black

        if(reuse == 'n'){
        work();
        rest(); 
        }

        system("color 0E"); // work: yellow on black
        system("cls");

        // Call loadingBar function for work time
        loadingBar(work_time_bar, "Look away! Concentrate!", "It's time for a break! (Press ENTER to continue)");

        // Play sound between work and rest
        playEndSound(750);  
        getchar();    

        system("cls");
        system("color 0C"); // rest: red on black

        loadingBar(rest_time_bar, "Rest! Relax!", "Break Over! (Press ENTER to continue)");

        playEndSound(1500);
        getchar();    

        system("cls");
        system("color 0F");

        // Ask user if they want to continue
        printf("\nDo you want to continue the work-rest cycle? (y/n): ");
        scanf(" %c", &continue_program);  // Capture the user's input

        if(continue_program=='y'){
            // Ask user if they want to continue
            printf("\nWould you like to use the same cycle times? (y/n): ");
            scanf(" %c", &reuse);  // Capture the user's input
        } else{
            break;
        }

        printf("\n");
    }

    system("cls");
    printf("\nEnd of Study Session!\n");
    return 0;
}