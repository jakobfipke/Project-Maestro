<?php
// used to get database connection
class DatabaseService {
  private $connection;

  public function getConnection() {
    $app_config = '../appconfig.ini';
    $ini = parse_ini_file($app_config);
    $db_name = $_SERVER['DOCUMENT_ROOT'] . "\\back-end\\db\\" . $ini['db_name'];  // create jwt-userdb.db in db folder

    $this->connection = null;

    try {
      $this->connection = new PDO("sqlite:$db_name");
    } catch (PDOExecption $exception) {
      echo "Connection failed: " . $exception->getMessage();
    }

    return $this->connection;
  }
}
?>