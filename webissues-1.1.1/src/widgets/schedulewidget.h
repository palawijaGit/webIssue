/**************************************************************************
* This file is part of the WebIssues Desktop Client program
* Copyright (C) 2006 Michał Męciński
* Copyright (C) 2007-2013 WebIssues Team
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
**************************************************************************/

#ifndef SCHEDULEWIDGET_H
#define SCHEDULEWIDGET_H

#include "dialogs/commanddialog.h"

#include <QWidget>

class QButtonGroup;

/**
* Widget for editing summary notification schedule.
*/
class ScheduleWidget : public QWidget
{
    Q_OBJECT
public:
    /**
    * Constructor.
    * @param parent The parent widget.
    */
    ScheduleWidget( QWidget* parent );

    /**
    * Destructor.
    */
    ~ScheduleWidget();

public:
    void setDays( const QString& days );
    QString days() const;

    void setHours( const QString& hours );
    QString hours() const;

private slots:
    void allDaysActivated();
    void noDaysActivated();
    void allHoursActivated();
    void noHoursActivated();

private:
    QButtonGroup* m_daysGroup;
    QButtonGroup* m_hoursGroup;
};

#endif
