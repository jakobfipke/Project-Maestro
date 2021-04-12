<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
		<!-- Bootstrap -->
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
		<link rel="stylesheet" type="text/css" href="css/backend_style.css"/>
	</head>
<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<a class="navbar-brand" href="../index.php">Project Maestro</a>
		</div>
	</nav>
	<div class="container">
		<?php
		include ('../db/inc_db_helper.php');
		session_start();
		$db = new DatabaseHelper('../db/projectmaestro.db');
		$ProjectOutlineId = $_GET['outlineId'];
		$CourseId = $_GET['crsId'];
		//store session vars for redirect on view_team
		$_SESSION['courseId'] = $CourseId;
		$_SESSION['outId'] = $ProjectOutlineId;
		
		$res = $db->getData("ProjectOutline", "ProjectOutlineId", $ProjectOutlineId);
		$row = $res->fetchArray();
		echo "<h3>{$row['ProjectOutlineName']}</h3>" .
			"<p>{$row['ProjectOutlineReq']}</p>" .
			"<p>Due date: {$row['ProjectOutlineEnd']}</p>";
		
		?>
        <h3>Projects</h3>
        <table width='100%' class='table table-striped'>
			<?php
				$res = $db->getData("Project", "ProjectOutlineId", $ProjectOutlineId);
				while ($row = $res->fetchArray()) {
					$view_project = "./view_team.php?projectId={$row['ProjectId']}&courseId={$CourseId}";
					echo "<tr><td>{$row['ProjectName']}</td>".
					"<td class='alignRight'>".
					"<a class='btn btn-small btn-primary' href='".$view_project."'>View Project</a>".
					"</td></tr>";
				}
			?>
        </table>
	</div>
</body>
</html>