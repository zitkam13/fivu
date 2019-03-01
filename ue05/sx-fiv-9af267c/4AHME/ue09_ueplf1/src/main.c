//***********************************************************************
// AIIT Template Level 2
// ----------------------------------------------------------------------
// Description: UART-Support, Timer, Task-System
// ----------------------------------------------------------------------
// Created: Aug 25, 2016 (SX)
// Program with ...
//***********************************************************************

#include "global.h"

#include <stdio.h>
#include <string.h>

#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>

#include "sys.h"
#include "app.h"

// defines
// ...

// declarations and definations
// ...

// Constants, located in program flash memory and SRAM
const char MAIN_WELCOME[] = "\n\rProgram ??";
const char MAIN_DATE[] = __DATE__;
const char MAIN_TIME[] = __TIME__;


int main (void)
{
  sys_init();
  app_init();
  printf("%s %s %s\n\r", MAIN_WELCOME, MAIN_DATE, MAIN_TIME);
  sys_newline();

  // enable interrupt system
  sei();

  while (1)
  {
    sys_main();
    app_main();
  }
  return 0;
}
