#!/bin/bash     

FILEBASEDIR=$(dirname "$0")
# ORGDIR=$(pwd)
LOGS_DIR=("${FILEBASEDIR}/Logs")
PRINTABLE_LOGS_DIR=("$LOGS_DIR/")
API_CALLED_LOGS_FILE_NAME=("ApiCalledLogs.txt")
API_CALLED_SIGNAL_ERROR_LOGS_FILE_NAME=("ApiCalledSignalErrorLogs.txt")
API_CALLED_ERROR_LOGS_FILE_NAME=("ApiCalledErrorLogs.txt")

cd ${LOGS_DIR}
echo -e ""
if [ ! -f ./${API_CALLED_LOGS_FILE_NAME} ]; then
    echo -e "----"
    printf "${API_CALLED_LOGS_FILE_NAME} not found\nDIR: ${PRINTABLE_LOGS_DIR}\n"
    echo -e "----"
else 
    printf "CLEARING LOGS OF ${API_CALLED_LOGS_FILE_NAME}"
    > ApiCalledLogs.txt
fi
echo -e ""
if [ ! -f ./${API_CALLED_SIGNAL_ERROR_LOGS_FILE_NAME} ]; then
    echo -e "----"
    printf "${API_CALLED_SIGNAL_ERROR_LOGS_FILE_NAME} not found \nDIR: ${PRINTABLE_LOGS_DIR}\n"
    echo -e "----"
else 
    printf "CLEARING LOGS OF ${API_CALLED_SIGNAL_ERROR_LOGS_FILE_NAME}"
    > ApiCalledSignalErrorLogs.txt
fi
echo -e ""
if [ ! -f ./${API_CALLED_ERROR_LOGS_FILE_NAME} ]; then
    echo -e "----"
    printf "${API_CALLED_ERROR_LOGS_FILE_NAME} not found\nDIR: ${PRINTABLE_LOGS_DIR}\n"
    echo -e "----"
else 
    printf "CLEARING LOGS OF ${API_CALLED_ERROR_LOGS_FILE_NAME}"
    > ApiCalledErrorLogs.txt
fi
echo -e ""



