@echo off
"C:\\Program Files\\Java\\jdk-17\\bin\\java" ^
  --class-path ^
  "C:\\Users\\rames\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.1.0\\aa32fec809c44fa531f01dcfb739b5b3304d3050\\cli-2.1.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  x86 ^
  --os-version ^
  24 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  26 ^
  --output ^
  "C:\\Users\\rames\\AppData\\Local\\Temp\\agp-prefab-staging15420529058927989533\\staged-cli-output" ^
  "C:\\Users\\rames\\.gradle\\caches\\8.10.2\\transforms\\f5f2c5a1aac81be5c2065c1af7ab67cb\\transformed\\react-android-0.76.5-release\\prefab" ^
  "C:\\Users\\rames\\.gradle\\caches\\8.10.2\\transforms\\8be93bdf47fee54855c5fbf0680faee1\\transformed\\hermes-android-0.76.5-release\\prefab" ^
  "C:\\Users\\rames\\.gradle\\caches\\8.10.2\\transforms\\8b60b4f75564ac53567672df7a1c9a73\\transformed\\fbjni-0.6.0\\prefab"
